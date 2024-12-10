package com.cooperfilme.controller;

import com.cooperfilme.enums.ScriptStatus;
import com.cooperfilme.model.Script;
import com.cooperfilme.service.ScriptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/scripts")
public class ScriptController {

    @Autowired
    private ScriptService scriptService;

    @PostMapping
    public Script createScript(@RequestBody Script script) {
        return scriptService.createScript(script);
    }

    @GetMapping
    public List<Script> getScripts(@RequestParam(required = false) ScriptStatus status) {
        return scriptService.getAllScripts(status);
    }

    @PutMapping("/{id}")
    public Script updateScriptStatus(@PathVariable Long id, @RequestParam ScriptStatus status) {
        // Atualizar lógica para incluir o usuário logado.
        return scriptService.updateScriptStatus(id, status, null);
    }
}
