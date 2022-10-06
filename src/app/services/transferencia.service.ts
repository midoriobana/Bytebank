import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Transferencia } from '../interfaces/transferencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  endpoint = environment.API_URL

  constructor(
    private http: HttpClient
  ) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  listarTransferencias(): Observable<Transferencia[]>{
    return this.http.get<Transferencia[]>(this.endpoint)
  }

  adicionarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);

    return this.http.post<Transferencia>(this.endpoint, transferencia)
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}