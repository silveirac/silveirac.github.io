package com.dh.model;

import org.apache.log4j.Logger;

import java.util.List;

public class ListaMedia {

    //LOGGER
    private static final Logger logger = Logger.getLogger(ListaMedia.class);

    //ATRIBUTOS
    private List<Integer> listaInteiros;

    //CONSTRUTORES
    public ListaMedia(List<Integer> lista) {
        this.listaInteiros = lista;
    }

    //GETTERS & SETTERS
    public List<Integer> getList() {
        return listaInteiros;
    }

    public void setList(List<Integer> list) {
        this.listaInteiros = list;
    }

    //METODOS
    public void verificaLista() {
        try {
            if (listaInteiros.size() == 0) {
                throw new ArithmeticException();
            } else if (listaInteiros.size() > 5 && listaInteiros.size() < 10) {
                logger.info("O comprimento da lista é maior que 5.");
            } else if (listaInteiros.size() > 10) {
                logger.info("O comprimento da lista é maior que 10.");
            }

            logger.info("Média da lista: " + media());

        } catch (ArithmeticException e) {
            logger.error("Lista vazia. Impossível calcular média.", e);
        }
    }

    public double media() {
        double media = 0;
        if (listaInteiros.size() != 0) {
            for (Integer num : listaInteiros) {
                media += num;
            }

            media = media / listaInteiros.size();
        }

        return media;
    }

    //TO STRING

    @Override
    public String toString() {
        return "ListaMedia = " +
                listaInteiros;
    }
}
