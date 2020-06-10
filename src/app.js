var fs = require('fs');

// ler estados
fs.readFile('./files/Estados.json', 'utf-8', (_, data) => {
  let estados = JSON.parse(data);
  //console.log(estados);
  // ler cidades
  fs.readFile('./files/Cidades.json', 'utf-8', (_, data1) => {
    let cidades = JSON.parse(data1);
    //console.log(cidades);
    estados.forEach((estado) => {
      //nomeEstado = estado.Nome.toString();
      let listaCidade = [];
      cidades.forEach((cidade) => {
        if (estado.ID === cidade.Estado) {
          listaCidade.push(cidade.Nome);
          //console.log(listaCidade);
        }
      });

      const fileExists = fs.exists(`./results/${estado.Sigla}.json`, () => {});
      if (fileExists) {
        // prettier-ignore
        fs.writeFile(`./results/${estado.Sigla}.json`, JSON.stringify(listaCidade), (_, data) => {});
      }
    });
  });
});

function listaCidadesUF(uf) {
  fs.readFile(`./results/${uf}.json`, 'utf-8', (_, data) => {
    let listaCidades = [];
    listaCidades = JSON.parse(data);
    let qntCidades = listaCidades.length;
    //console.log(listaCidades);
    console.log(qntCidades);
  });
}

//listaCidadesUF('RJ');

function contaCidadesUF() {
  fs.readFile('./files/Estados.json', 'utf-8', (_, data) => {
    let estados = JSON.parse(data);
    let qntCidades = [];
    estados.forEach((estado) => {
      fs.readFile(`./results/${estado.Sigla}.json`, 'utf-8', (_, data) => {
        let listaCidades = [];
        listaCidades = JSON.parse(data);

        let objCidade = { qnt: listaCidades.length, uf: estado.Sigla };
        qntCidades.push(objCidade);

        qntCidades.sort((a, b) => {
          return a.qnt - b.qnt;
        });

        console.log(qntCidades);
      });
    });
  });
}

//contaCidadesUF();

function menorContaNomeCidadesUF() {
  fs.readFile('./files/Estados.json', 'utf-8', (_, data) => {
    let estados = JSON.parse(data);
    estados.forEach((estado) => {
      fs.readFile(`./results/${estado.Sigla}.json`, 'utf-8', (_, data) => {
        let listaCidades = [];
        listaCidades = JSON.parse(data);

        let arrayTamanhoCidade = listaCidades.map((cidade) => {
          return {
            uf: estado.Sigla,
            cidade,
            tamanho: cidade.length,
          };
        });

        arrayTamanhoCidade.sort((a, b) => {
          return a.tamanho - b.tamanho;
        });
        console.log(arrayTamanhoCidade);
      });
    });
  });
}

//menorContaNomeCidadesUF();

function maiorContaNomeCidadesUF() {
  fs.readFile('./files/Estados.json', 'utf-8', (_, data) => {
    let estados = JSON.parse(data);
    estados.forEach((estado) => {
      fs.readFile(`./results/${estado.Sigla}.json`, 'utf-8', (_, data) => {
        let listaCidades = [];
        listaCidades = JSON.parse(data);

        let arrayTamanhoCidade = listaCidades.map((cidade) => {
          return {
            uf: estado.Sigla,
            cidade,
            tamanho: cidade.length,
          };
        });

        arrayTamanhoCidade.sort((a, b) => {
          return b.tamanho - a.tamanho;
        });
        console.log(arrayTamanhoCidade);
      });
    });
  });
}

//maiorContaNomeCidadesUF();

function mostraTamanhoNomeCidadesUF() {
  fs.readFile('./files/Estados.json', 'utf-8', (_, data) => {
    let estados = JSON.parse(data);
    estados.forEach((estado) => {
      fs.readFile(`./results/${estado.Sigla}.json`, 'utf-8', (_, data) => {
        let listaCidades = [];
        listaCidades = JSON.parse(data);

        let arrayTamanhoCidade = listaCidades.map((cidade) => {
          return {
            uf: estado.Sigla,
            cidade,
            tamanho: cidade.length,
          };
        });
        let menores = [];
        arrayTamanhoCidade.sort((a, b) => {
          return a.tamanho - b.tamanho;
        });
        menores.push(
          arrayTamanhoCidade[0],
          arrayTamanhoCidade[arrayTamanhoCidade.length - 1]
        );

        console.log(menores);
      });
    });
  });
}
mostraTamanhoNomeCidadesUF();

function mostraTamanhoNomeCidadesUFslice() {
  fs.readFile('./files/Estados.json', 'utf-8', (_, data) => {
    let estados = JSON.parse(data);
    estados.forEach((estado) => {
      fs.readFile(`./results/${estado.Sigla}.json`, 'utf-8', (_, data) => {
        let listaCidades = [];
        listaCidades = JSON.parse(data);

        let arrayTamanhoCidade = listaCidades.map((cidade) => {
          return {
            uf: estado.Sigla,
            cidade,
            tamanho: cidade.length,
          };
        });

        arrayTamanhoCidade.sort((a, b) => {
          return a.tamanho - b.tamanho;
        });

        let menores = arrayTamanhoCidade.slice(0, 5);
        // prettier-ignore
        let maiores = arrayTamanhoCidade.slice(arrayTamanhoCidade.length - 5, arrayTamanhoCidade.length);

        console.log(menores);
        console.log(maiores);
      });
    });
  });
}

//mostraTamanhoNomeCidadesUFslice();
////////////////////////////////
