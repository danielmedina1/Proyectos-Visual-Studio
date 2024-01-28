package tcpHilos;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

public class Cliente {
	public static void main(String[] args) {
		String host = "localhost";
		int puerto = 6006;
		Scanner sc = new Scanner(System.in);
	
		
			Socket cliente;
			try {
				cliente = new Socket(host, puerto);
				//Flujo de salida al servidor
			PrintWriter fsalida = new PrintWriter(cliente.getOutputStream(), true);
			//Flujo de entrada al servidor
			BufferedReader fentrada = new BufferedReader(new InputStreamReader(cliente.getInputStream()));
			
			System.out.println("Dame un texto: ");
			String cadena = "";
			String cadena2 = "";
			
			cadena = sc.nextLine(); 
			while (!cadena.equals("*")) {
				//1) Envío la cadena al hilo
				fsalida.println(cadena);
			
				//4) Recibo la cadena
				cadena2 = fentrada.readLine();
				System.out.println("ECO -> "+cadena2);
				
				System.out.println("Texto: ");
				cadena = sc.nextLine();
			}
			fsalida.close();
			fentrada.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			
			
			
			
			
			
 
	}

}
