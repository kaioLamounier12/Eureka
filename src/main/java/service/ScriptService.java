package com.cooperfilme.service;

import com.cooperfilme.enums.ScriptStatus;
import com.cooperfilme.model.Script;
import com.cooperfilme.model.User;
import com.cooperfilme.repository.ScriptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ScriptService {

    @Autowired
    private ScriptRepository scriptRepository;

    public Script createScript(Script script) {
        script.setStatus(ScriptStatus.AGUARDANDO_ANALISE);
        script.setCreatedAt(LocalDateTime.now());
        return scriptRepository.save(script);
    }

    public List<Script> getAllScripts(ScriptStatus status) {
        if (status != null) {
            return scriptRepository.findByStatus(status);
        }
        return scriptRepository.findAll();
    }

    public Script updateScriptStatus(Long scriptId, ScriptStatus status, User user) {
        Script script = scriptRepository.findById(scriptId).orElseThrow(() -> new RuntimeException("Script not found"));
        script.setStatus(status);
        script.setAssignedTo(user);
        return scriptRepository.save(script);
    }
}
