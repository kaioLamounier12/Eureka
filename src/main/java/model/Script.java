package com.cooperfilme.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Script {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;
    private String clientName;
    private String clientEmail;
    private String clientPhone;

    @Enumerated(EnumType.STRING)
    private ScriptStatus status;

    @ManyToOne
    private User assignedTo;

    private LocalDateTime createdAt;
}
