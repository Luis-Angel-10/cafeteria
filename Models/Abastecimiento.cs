    using System;
using System.Collections.Generic;

namespace TerraCafeApi.Models;

public partial class Abastecimiento
{
    public int Id { get; set; }

    public int IdCafeteria { get; set; }

    public int IdProducto { get; set; }

    public int Cantidad { get; set; }

    public DateTime? FechaEnvio { get; set; }

    public virtual Cafeteria IdCafeteriaNavigation { get; set; } = null!;

    public virtual Producto IdProductoNavigation { get; set; } = null!;
}
