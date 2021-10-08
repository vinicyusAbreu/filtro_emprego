(function() {
    'use strict';
    const removeAll = document.querySelector('.remover_all');
    const containerFiltro = document.querySelector('.container_filtro');
    const filtro = document.querySelector('.filtro');
    const stack = document.querySelectorAll('.stack');
    const trab = document.querySelectorAll('.trab');
    const containerStack = document.querySelectorAll(".container-stack");

    let array = [];
    let arr = [];

    stack.forEach((elemente) => {

        elemente.addEventListener('click', () => {


            let remove = criarElemento(elemente.textContent);
            const span = document.querySelectorAll('.nome_filtro');
            remove.forEach((remo) => {
                remo.addEventListener('click', removeStack);


            });
            span.forEach(elemento => {
                filtragem(elemento);
            })



        });


    });

    removeAll.addEventListener('click', removeTudo);

    function removeTudo() {
        containerFiltro.remove()
        filtro.style.display = 'none';
        window.location.reload()
    }


    function criarElemento(nomeStack) {
        let valor = false;
        //criar div
        const Div = document.createElement('div');
        Div.className = 'lista-filtro';

        //criar span1
        const span1 = document.createElement('span');
        span1.className = 'nome_filtro';
        span1.textContent = nomeStack;

        //criar span2
        const span2 = document.createElement('span');
        span2.className = "remove";

        const img = document.createElement('img');
        img.src = './image/icon-remove.svg';
        img.className = "remover";

        span2.appendChild(img);

        Div.appendChild(span1);
        Div.appendChild(span2);

        let comparar = document.querySelectorAll('.lista-filtro');

        comparar.forEach(elemento => {
            if (elemento.textContent == nomeStack) {
                valor = true;
            }
        })
        if (valor === false) {
            containerFiltro.appendChild(Div);
            filtro.style.display = 'flex';


        }

        const remove = document.querySelectorAll('.remover');


        return remove;

    }

    function removeStack() {
        const remove = document.querySelectorAll('.lista-filtro');

        remove.forEach((elemento) => {
            elemento.addEventListener('click', () => {
                elemento.remove();
                const span = document.querySelectorAll('.nome_filtro');

                array = [];
                span.forEach(elemento => {
                    filtragem(elemento);
                })

            })
        });

        if (remove.length == 1) {
            removeTudo();
        }


    }

    function filtragem(elemente) {
        if (array.length == 0) {

            containerStack.forEach(el => {

                for (let valor of el.children) {
                    if (valor.innerHTML === elemente.innerHTML) {
                        array.push(valor.parentElement.parentElement.parentElement);
                    }
                }

            })


        } else {
            array.forEach(element => {
                for (let valor of element.children) {
                    arr.push(valor.children[2])
                }

            });
            if (array.length > 1) {
                array = [];
                arr.forEach(elemento => {
                    for (let valor of elemento.children) {
                        if (valor.innerHTML === elemente.innerHTML) {
                            array.push(valor.parentElement.parentElement.parentElement);
                        }
                    }
                })
            } else {
                console.log(array)
            }
        }

        trab.forEach(elemento => {
            elemento.style.display = 'none';
        })

        array.forEach(el => {

            el.style.display = 'flex';
        })
    }
})()