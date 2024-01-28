package tcpHilos;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Servidor {
	

	public static void main(String[] args) throws IOException {
		ServerSocket servidor;
		servidor = new ServerSocket(6006);
		System.out.println("Servidor iniciado");
		
		while (true) {
			Socket cliente = servidor.accept();
			HilosServidor h = new HilosServidor(cliente);
			h.start();
		}
	}



}
