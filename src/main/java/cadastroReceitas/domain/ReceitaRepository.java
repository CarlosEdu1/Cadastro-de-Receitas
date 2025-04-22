package cadastroReceitas.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceitaRepository extends JpaRepository<ReceitaDto, Long> {
}
