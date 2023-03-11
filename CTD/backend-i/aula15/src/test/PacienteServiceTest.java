package test;

import com.dao.impl.EnderecoDao;
import com.dao.impl.PacienteDao;
import com.model.Endereco;
import com.model.Paciente;
import com.service.EnderecoService;
import com.service.PacienteService;
import org.apache.log4j.Logger;
import org.junit.jupiter.api.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class PacienteServiceTest {

    //INSTANCIANDO UM LOGGER
    Logger logger = Logger.getLogger(PacienteServiceTest.class);

    //INSTANCIANDO ENDEREÇOS
    Endereco e1 = new Endereco("Avenida Brasil", "500", "São Paulo", "Centro");
    Endereco e2 = new Endereco("Rua Vitoriano dos Anjos", "360", "Campinas", "Ponte Preta");
    Endereco e3 = new Endereco("Rua Alvaro Bosco", "30B", "Arthur Nogueira", "Vila Maria");

    //INSTANCIANDO PACIENTES
    Paciente p1 = new Paciente("Larissa", "Rabi", "43.560.234-0", Date.valueOf(LocalDate.of(1994, 5, 22)), e1);
    Paciente p2 = new Paciente("Cauê", "Silveira", "55.087.352-7", Date.valueOf(LocalDate.of(1991,10,3)), e2);
    Paciente p3 = new Paciente("Jorge", "Silva", "31.568.003-6", Date.valueOf(LocalDate.of(1974,11,17)), e3);

    //INSTANCIANDO OS SERVIÇOS
    PacienteService ps = new PacienteService(new PacienteDao());
    EnderecoService es = new EnderecoService(new EnderecoDao());

    @Test
    @DisplayName("CADASTRO DE ENDEREÇO (POPULAR DB)")
    @Order(1)
    void testeCadastroEndereco1 () {
        e1 = es.salvar(e1);

        //VERIFICANDO SE O ENDEREÇO FOI CRIADO CORRETAMENTE
        Assertions.assertNotNull(e1);
        logger.debug("Sucesso no cadastro do endereço.");

        //VERFICANDO FUNCIONAMENTO DO RETORNO DO ID
        Assertions.assertNotEquals(0, e1.getId());
        logger.debug("Sucesso na captura do id criado pelo DB: id=" + e1.getId());
    }

    @Test
    @DisplayName("CADASTRO DE ENDEREÇO (POPULAR DB")
    @Order(2)
    void testeCadastroEndereco2 () {
        e2 = es.salvar(e2);

        //VERIFICANDO SE O ENDEREÇO FOI CRIADO CORRETAMENTE
        Assertions.assertNotNull(e2);
        logger.debug("Sucesso no cadastro do endereço.");

        //VERFICANDO FUNCIONAMENTO DO RETORNO DO ID
        Assertions.assertNotEquals(0, e2.getId());
        logger.debug("Sucesso na captura do id criado pelo DB: id=" + e2.getId());
    }

    @Test
    @DisplayName("CADASTRO DE ENDEREÇO - MESA")
    @Order(3)
    void testeCadastroEndereco3 () {
        e3 = es.salvar(e3);

        //VERIFICANDO SE O ENDEREÇO FOI CRIADO CORRETAMENTE
        Assertions.assertNotNull(e3);
        logger.debug("Sucesso no cadastro do endereço.");

        //VERFICANDO FUNCIONAMENTO DO RETORNO DO ID
        Assertions.assertNotEquals(0, e3.getId());
        logger.debug("Sucesso na captura do id criado pelo DB: id=" + e3.getId());
    }


    @Test
    @DisplayName("CADASTRO DE PACIENTE (POPULAR DB")
    @Order(4)
    void testeCadastroPaciente1() {
        p1 = ps.salvar(p1);

        //VERIFICANDO SE O ENDEREÇO FOI CRIADO CORRETAMENTE
        Assertions.assertNotNull(p1);
        logger.debug("Sucesso no cadastro do endereço.");

        //VERFICANDO FUNCIONAMENTO DO RETORNO DO ID
        Assertions.assertNotEquals(0, p1.getId());
        logger.debug("Sucesso na captura do id criado pelo DB: id=" + p1.getId());
    }

    @Test
    @DisplayName("CADASTRO DE PACIENTE (POPULAR DB")
    @Order(5)
    void testeCadastroPaciente2() {
        p2 = ps.salvar(p2);

        //VERIFICANDO SE O ENDEREÇO FOI CRIADO CORRETAMENTE
        Assertions.assertNotNull(p2);
        logger.debug("Sucesso no cadastro do endereço.");

        //VERFICANDO FUNCIONAMENTO DO RETORNO DO ID
        Assertions.assertNotEquals(0, p2.getId());
        logger.debug("Sucesso na captura do id criado pelo DB: id=" + p2.getId());
    }

    @Test
    @DisplayName("CADASTRO DE PACIENTE - MESA")
    @Order(6)
    void testeCadastroPaciente3 () {
        p3 = ps.salvar(p3);

        //VERIFICANDO SE O ENDEREÇO FOI CRIADO CORRETAMENTE
        Assertions.assertNotNull(p3);
        logger.debug("Sucesso no cadastro do endereço.");

        //VERFICANDO FUNCIONAMENTO DO RETORNO DO ID
        Assertions.assertNotEquals(0, p3.getId());
        logger.debug("Sucesso na captura do id criado pelo DB: id=" + p3.getId());
    }

    @Test
    @DisplayName("SELECT PACIENTE POR ID - MESA")
    @Order(7)
    void testeSelectPacientePorId () {
        int id = 3;

        //VERIFICANDO RETORNO DE PACIENTE NOT NULL
        logger.debug("Buscando paciente com id=" + id);
        Paciente p = ps.buscarPorId(id);
        Assertions.assertNotNull(p);

        //VERIFICANDO CORRESPONDENCIA DO ID DO PACIENTE RETORNADO
        Assertions.assertEquals(id, p.getId());
        logger.debug("Paciente retornado corretamente: " + p);

    }

    @Test
    @DisplayName("DELETE PACIENTE POR ID - MESA")
    @Order(8)
    void testeDeletePacientePorId () {
        int id = 3;

        //VERIFICANDO DELECAO DE PACIENTE
        logger.debug("Deletando paciente com id=" + id);
        ps.excluir(id);
        Assertions.assertNull(ps.buscarPorId(id));
        logger.debug("Paciente deletado com sucesso: id=" + id);

    }

    @Test
    @DisplayName("SELECT TODOS OS PACIENTES - MESA")
    @Order(9)
    void testeDeletePacienteTodos () {

        //SELECT * SEM PARAAMETRO NA TABELA PACIENTE
        logger.debug("Buscando todos os registros da tabela PACIENTE.");
        List<Paciente> lista = ps.buscarTodos();

        //VERIFICANDO SE A LISTA IS NOT NULL
        Assertions.assertNotNull(lista);
        logger.debug("Lista retornada com sucesso!");

        //VERIFICANDO SE A LISTA NÃO ESTA VAZIA
        Assertions.assertNotEquals(0, lista.size());
        logger.debug("Lista não vazia!");

        //IMPRIMINDO PACIENTES
        for(Paciente p : lista) {
            logger.debug(p);
        }

    }




}
