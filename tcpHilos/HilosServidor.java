package tcpHilos;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class HilosServidor extends Thread {
	
	BufferedReader fentrada;
	PrintWriter fsalida;
	Socket socket;
	
	public HilosServidor(Socket s)  {
		this.socket = s;
		try {
			fentrada = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			fsalida = new PrintWriter(socket.getOutputStream(), true);
		} catch (IOException e) {
			System.err.println("Error de E/S");
		}
		
	}
	
	public void run() {
		//Se encarga de cada cliente
		String cadena = "";
		//2) Recibo la cadena del cliente
		try {
			while (!cadena.equals("*")) {
				cadena = fentrada.readLine();
				//3) Pasamos a mayuscula y reenviamos
				fsalida.println(cadena.trim().toUpperCase());
			}
			
			
			
			
			fsalida.close();
			fentrada.close();
			socket.close();
		} catch (Exception e) {
			cadena = "*";
		}
		
	}

}
