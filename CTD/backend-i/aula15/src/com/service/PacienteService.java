package com.service;

import com.dao.impl.PacienteDao;
import com.model.Paciente;

import java.util.List;

public class PacienteService {

    private PacienteDao pacienteDao;

    public PacienteService(PacienteDao pacienteDao) {
        this.pacienteDao = pacienteDao;
    }

    public Paciente salvar(Paciente paciente) {
        return pacienteDao.salvar(paciente);
    }

    public Paciente buscarPorId(int id) {
        return pacienteDao.buscarPorId(id);
    }

    public List<Paciente> buscarTodos() {
        return pacienteDao.buscarTodos();
    }

    public void excluir(int id) {
        pacienteDao.excluir(id);
    }
}
