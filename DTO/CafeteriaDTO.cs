namespace TerraCafeApi.DTO
{
    public class CafeteriaDTO
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = null!;
        public string? Direccion { get; set; }
        public decimal Lat { get; set; }
        public decimal Lng { get; set; }
        public string? Descripcion { get; set; }
        public string? Telefono { get; set; }
        public string? Horario { get; set; }
        public DateTime FechaRegistro { get; set; }
    }
}
