package cadastroReceitas.controller;

import cadastroReceitas.domain.ReceitaDto;
import cadastroReceitas.domain.ReceitaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/projeto/receitas")
public class ReceitasController {

    @Autowired
    private ReceitaRepository receitaRepository;

    @GetMapping
    public ResponseEntity< List<ReceitaDto>> findAll() {
        return ResponseEntity.ok(receitaRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<?> incluir(@RequestBody @Valid ReceitaDto receita) {
        ReceitaDto receitaSalva = receitaRepository.save(receita);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{id}")
                .buildAndExpand(receitaSalva.getId()).toUri();
        return ResponseEntity.created(location).build();
    }
}
