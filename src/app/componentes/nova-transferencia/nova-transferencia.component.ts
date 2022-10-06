import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/interfaces/transferencia';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>()
  valor: number
  destino: number
  
  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router
    ){
      
    }
    
    adicionarTransferencia() {
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}
    this.transferenciaService.adicionarTransferencia(valorEmitir).subscribe(resultado => {
      console.log(resultado)
      this.router.navigate(['/extrato'])
      this.limparCampos()
    },
    (error) => console.log(error))
    this.limparCampos()
  }

  limparCampos(){
    this.valor = 0
    this.destino = 0
  }
}