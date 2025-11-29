namespace TerraCafeApi.DTO
{
    public class AbastecimientoDTO
    {
        public int Id { get; set; }
        public int IdCafeteria { get; set; }
        public int IdProducto { get; set; }
        public int Cantidad { get; set; }
        public DateTime FechaEnvio { get; set; }
    }
}
