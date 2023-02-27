import service.ApiHotel;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        ApiHotel hoteis = new ApiHotel();
        hoteis.addDisponibilidadeHotel("Hilton", LocalDate.of(2023, 1, 1), LocalDate.of(2024, 12, 31), "Los Angeles");

        hoteis.busca(LocalDate.of(2023, 3, 21), LocalDate.of(2023, 3, 30),"Los Angeles");
        hoteis.busca(LocalDate.of(2023, 3, 21), LocalDate.of(2023, 3, 30),"Rio de Janeiro");
    }
}