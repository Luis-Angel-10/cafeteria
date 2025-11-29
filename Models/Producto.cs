using System;
using System.Collections.Generic;

namespace TerraCafeApi.Models;

public partial class Producto
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string? Descripcion { get; set; }

    public string? Origen { get; set; }

    public string? TipoGrano { get; set; }

    public string? Tueste { get; set; }

    public int? Stock { get; set; }

    public decimal Precio { get; set; }

    public DateTime? FechaRegistro { get; set; }

    public virtual ICollection<Abastecimiento> Abastecimientos { get; set; } = new List<Abastecimiento>();
}
