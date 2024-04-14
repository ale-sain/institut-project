#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <arpa/inet.h>
#include <sys/socket.h>

typedef struct s_client
{
	int id;
	char msg[110000];
} t_client;

t_client clients[1024];
int max = 0, next_id = 0;
char buffer_read[4096 * 42], buffer_write[4096 * 42];
fd_set current_fd, read_fd, write_fd;

//Function that writes the error message to stderr and exits the program.//
void error(char *err)
{
	write(2, err, strlen(err));
	write(2, "\n", 1);
	exit(1);
}

//This function takes an integer sender as an argument.
//It iterates through all the file descriptors in write_fd and sends
//the message in buffer_write to all the file descriptors except the sender.
void send_all(int sender)
{
	for (int sockfd = 0; sockfd <= max; sockfd++)
		if (FD_ISSET(sockfd, &write_fd) && sockfd != sender)
			send(sockfd, buffer_write, strlen(buffer_write), 0);
}

//Main function that starts the chat server.
//It checks if the correct number of arguments have been provided.
//Creates a master socket using socket function.
//Clears the current_fd set of file descriptors and sets the master socket as part of the set.
//Initializes the address structure and binds it to the master socket using bind.
//Listens to incoming connections using listen.
//In a loop, it waits for a client to either connect or send a message.
//If the master socket is set, then it accepts the incoming connection and assigns the connected client a unique ID.
//It sends a message to all the connected clients that a new client has arrived.
//If the client socket is set, then it reads the incoming message and sends it to all the connected clients,
//except for the sender. If it receives an error from recv, it sends a message to all the connected clients
//that the client has left and closes the socket.
int main(int ac, char **av)
{
	if (ac != 2)
		error("Wrong number of arguments");

	int master_socket = socket(AF_INET, SOCK_STREAM, 0);
	if (master_socket < 0)
		error("Fatal error");
	bzero(&clients, sizeof(clients));
	FD_ZERO(&current_fd);
	FD_SET(master_socket, &current_fd);
	max = master_socket;

	struct sockaddr_in addr;
	socklen_t addrlen = sizeof(addr);
	addr.sin_family = AF_INET;
	addr.sin_addr.s_addr = htonl(INADDR_LOOPBACK);
	addr.sin_port = htons(atoi(av[1]));

	if (bind(master_socket, (struct sockaddr *)&addr, sizeof(addr)) < 0)
		error("Fatal error");
	if (listen(master_socket, 42) < 0)
		error("Fatal error");

	while (1)
	{
		read_fd = write_fd = current_fd;
		if (select(max + 1, &read_fd, &write_fd, NULL, NULL) < 0) // checking fds signals with select
			continue;
		for (int sockfd = 0; sockfd <= max; sockfd++) // iterating through all the fds available
		{
			if (FD_ISSET(sockfd, &read_fd) && sockfd == master_socket) // if select signal is received to master_socket
			{
				int new_sd = accept(master_socket, (struct sockaddr *)&addr, &addrlen); // accepting new clients to the server
				if (new_sd < 0)
					continue;
				FD_SET(new_sd, &current_fd); // registering a new fd to the select set (new client)
				max = max > new_sd ? max : new_sd; //returns the greater fd and assigns it to max
				clients[new_sd].id = next_id++; // assigning ID to client
				sprintf(buffer_write, "server: client %d just arrived\n", clients[new_sd].id);
				send_all(new_sd);
				break;
			}
			else if (FD_ISSET(sockfd, &read_fd)) // if select signal is ready to be read from sockfd
			{
				int res = recv(sockfd, buffer_read, 65000, 0); // store sent string by client into buffer_read
				if (res <= 0) // if the client sends an empty msg, /0 will still be returned so if res <= 0 means client is not there anymore
				{
					sprintf(buffer_write, "server: client %d just left\n", clients[sockfd].id); // buffer_write
					send_all(sockfd); // sending buffer_write to everyone
					FD_CLR(sockfd, &current_fd);
					close(sockfd);
					break;
				}
				else // else if client is still there (so he sends a message, even an empty one)
				{
					for (int i = 0, j = strlen(clients[sockfd].msg); i < res; i++, j++) // iterating through the read_buffer until the end of it char to char
					{
						clients[sockfd].msg[j] = buffer_read[i]; // storing the buffer into clients message buffer
						if (clients[sockfd].msg[j] == '\n') // if clients message character is \n
						{
							clients[sockfd].msg[j] = '\0'; // client msg end
							sprintf(buffer_write, "client %d: %s\n", clients[sockfd].id, clients[sockfd].msg); // printing the client msg buffer to buffer_write
							send_all(sockfd); // sending it to everyone
							bzero(&clients[sockfd].msg, strlen(clients[sockfd].msg)); // RAZ
							j = -1;
						}
					}
					break;
				}
			}
		}
	}
}