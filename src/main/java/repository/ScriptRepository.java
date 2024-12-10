package com.cooperfilme.repository;

import com.cooperfilme.model.Script;
import com.cooperfilme.enums.ScriptStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScriptRepository extends JpaRepository<Script, Long> {
    List<Script> findByStatus(ScriptStatus status);
}
