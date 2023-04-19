package br.com.dio.desafio.dominio;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


public class Main {
    public static void main(String[] args) {
        Curso curso1 = new Curso();
        curso1.setTitulo("curso java");
        curso1.setDescricao("descricao curso java");
        curso1.setCargaHoraria(8);

        Curso curso2 = new Curso();
        curso2.setTitulo("curso python");
        curso2.setDescricao("descricao curso python");
        curso2.setCargaHoraria(18);

        Mentoria mentoria = new Mentoria();
        mentoria.setTitulo("mentoria java");
        mentoria.setDescricao("descricao mentoria python");
        mentoria.setData(LocalDate.now());

        //Conteudo conteudo = new Curso(); //POLIMORFISMO
       
        //List<String> palavras = new ArrayList<>(); //POLIMORFISMO



        /* System.out.println(curso1);
           System.out.println(curso2);
           System.out.println(mentoria);*/

        Bootcamp bootcamp = new Bootcamp();
        bootcamp.setNome("Bootcamp Java Developer");
        bootcamp.setDescricao("Descrição Bootcamp Java Developer");
        bootcamp.getConteudos().add(curso1);
        bootcamp.getConteudos().add(curso2);;
        bootcamp.getConteudos().add(mentoria);


        Dev devJefferson = new Dev();
        devJefferson.setNome("Jefferson");
        devJefferson.inscreverBootcamp(bootcamp);
        //----------------------------------------------
        System.out.println("Conteúdos Inscritos Jefferson " + devJefferson.getConteudoInscritos());
        devJefferson.progredir();
        System.out.println("-");
        devJefferson.progredir();
        System.out.println("-");
        System.out.println("Conteúdos Inscritos Jefferson " + devJefferson.getConteudoInscritos());
        System.out.println("Conteúdos Concluidos Jefferson " + devJefferson.getConteudoConcluidos());
        System.out.println("XP:" + devJefferson.calcularTotalxp());

        System.out.println("-------------");

        Dev devYakisoba = new Dev();
        devYakisoba.setNome("Yakisoba");
        devYakisoba.inscreverBootcamp(bootcamp);
        //----------------------------------------------
        System.out.println("Conteúdos Inscritos Yakisoba" + devYakisoba.getConteudoInscritos());
        devYakisoba.progredir();
        devYakisoba.progredir();
        devYakisoba.progredir();
        devYakisoba.progredir();
        System.out.println("-");
        System.out.println("Conteúdos Inscritos Yakisoba" + devYakisoba.getConteudoInscritos());
        System.out.println("Conteúdos Concluidos Yakisoba" + devYakisoba.getConteudoConcluidos());
        System.out.println("XP:" + devYakisoba.calcularTotalxp());













    }
}
