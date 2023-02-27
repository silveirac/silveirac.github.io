import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

public class ProxySerieTest {

    ISerie proxy = new ProxySerie();

    @Test
    @Order(0)
    @DisplayName("Quantidade não excedida (<5)")
    void verificaContagemDoProxy() throws SerieNaoHabilitadaException {
        try {
            proxy.getSerie("houseofthedragon");
            proxy.getSerie("csi");
            proxy.getSerie("thewalkingdead");
            proxy.getSerie("supernatural");
            proxy.getSerie("thelastofus");
            System.out.println("");
        } catch (SerieNaoHabilitadaException err) {
            System.out.println(err);
        }

    }

    @Test
    @Order(1)
    @DisplayName("Quantidade excedida (>5)")
    void verificaContagemDoProxyErr() throws SerieNaoHabilitadaException {
        try {
            proxy.getSerie("houseofthedragon");
            proxy.getSerie("csi");
            proxy.getSerie("thewalkingdead");
            proxy.getSerie("supernatural");
            proxy.getSerie("thelastofus");
            proxy.getSerie("aliceinwonderlands");
            System.out.println("");
        } catch (SerieNaoHabilitadaException err) {
            System.out.println(err);
        }

    }




}
