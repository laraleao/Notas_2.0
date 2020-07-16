// Um sistema devera calcular automaticamente e apresentar a media dos alunos e informar se foi "aprovado" ou "reprovado". ("aprovado" caso a media seja acima ou igual a 7.0).

// A turma deve ter no minimo 15 alunos.

// O aluno que tiver a maior media devera aparecer em destaque caso ele tenha sido aprovado.

function calc_media() {
  const nota1 = Number(document.getElementById("nota1").value);
  const nota2 = Number(document.getElementById("nota2").value);
  const nota3 = Number(document.getElementById("nota3").value);
  const nota4 = Number(document.getElementById("nota4").value);
  const media = document.getElementById("media");

  media.value = (nota1 + nota2 + nota3 + nota4) / 4;

  console.log("media", media.value);

  const resultado = document.getElementById("resultado");

  if (media >= 7) {
    resultado.value = "Aluno Aprovado";
    console.log("Aluno Aprovado");
  } else {
    resultado.value = "Aluno Reprovado";
    console.log("Aluno Reprovado");
  }
}
