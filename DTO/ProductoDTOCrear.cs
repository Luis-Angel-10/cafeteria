namespace TerraCafeApi.DTO
{
    public class ProductoDTOCrear
    {
        public string Nombre { get; set; } = null!;
        public string? Descripcion { get; set; }
        public string? Origen { get; set; }
        public string? TipoGrano { get; set; }
        public string? Tueste { get; set; }
        public int Stock { get; set; }
        public decimal Precio { get; set; }
    }
}
