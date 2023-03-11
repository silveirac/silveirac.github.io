package test.com.dh.service;

import com.dh.config.ConfiguracaoJDBC;
import com.dh.dao.impl.MedicamentoDao;
import com.dh.model.Medicamento;
import com.dh.service.MedicamentoService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class MedicamentoServiceTest {

    public MedicamentoService medicamentoService = new MedicamentoService(new MedicamentoDao(new ConfiguracaoJDBC()));

    @Test
    @DisplayName("Teste Salvar Medicamento")
    void deveSalvarMedicamento () {
        Medicamento medicamento = new Medicamento("Ibuprofeno", "Aché", 300, 15.0);
        medicamentoService.salvarMedicamento(medicamento);
        Assertions.assertNotNull(medicamento.getId());
    }
}
