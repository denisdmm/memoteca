import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ListarPensamentoComponent } from '../listar-pensamento/listar-pensamento.component';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  router: Router;
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }
  constructor(router: Router) { this.router = router; }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("Novo pensamento criado!")
  }

  cancelar() {
    alert("Ação cancelada!")
    this.router.navigate(["/listarPensamento"]);
  }

}
