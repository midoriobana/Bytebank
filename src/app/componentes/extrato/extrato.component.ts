import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/interfaces/transferencia';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];

  constructor(
    private transferenciaService: TransferenciaService
  ) {}

  ngOnInit(): void {
    this.transferenciaService.listarTransferencias().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias
    })
  }
}