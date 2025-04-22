package cadastroReceitas.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Table(name = "receita")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReceitaDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome da receita não pode estar em branco")
    private String nomeReceita;

    @NotBlank(message = "Os ingredientes da receita não podem ficar em branco")
    @Column(length = 1000)
    private String ingredientes;

    @NotBlank(message = "O modo de preparo precisa ser preenchido")
    @Column(length = 2000)
    private String modoDePreparo;


}
