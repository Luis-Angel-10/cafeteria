using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TerraCafeApi.Models;

public partial class TerraCafeContext : DbContext
{
    public TerraCafeContext()
    {
    }

    public TerraCafeContext(DbContextOptions<TerraCafeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Abastecimiento> Abastecimientos { get; set; }

    public virtual DbSet<Cafeteria> Cafeterias { get; set; }

    public virtual DbSet<Distribuidora> Distribuidoras { get; set; }

    public virtual DbSet<Producto> Productos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Database=terraCafe;Username=postgres;Password=mapache");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Abastecimiento>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("abastecimientos_pkey");

            entity.ToTable("abastecimientos");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasColumnName("id");
            entity.Property(e => e.Cantidad).HasColumnName("cantidad");
            entity.Property(e => e.FechaEnvio)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("fecha_envio");
            entity.Property(e => e.IdCafeteria).HasColumnName("id_cafeteria");
            entity.Property(e => e.IdProducto).HasColumnName("id_producto");

            entity.HasOne(d => d.IdCafeteriaNavigation).WithMany(p => p.Abastecimientos)
                .HasForeignKey(d => d.IdCafeteria)
                .HasConstraintName("abastecimientos_id_cafeteria_fkey");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.Abastecimientos)
                .HasForeignKey(d => d.IdProducto)
                .HasConstraintName("abastecimientos_id_producto_fkey");
        });

        modelBuilder.Entity<Cafeteria>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("cafeterias_pkey");

            entity.ToTable("cafeterias");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasColumnName("id");
            entity.Property(e => e.Descripcion).HasColumnName("descripcion");
            entity.Property(e => e.Direccion).HasColumnName("direccion");
            entity.Property(e => e.FechaRegistro)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("fecha_registro");
            entity.Property(e => e.Horario)
                .HasMaxLength(100)
                .HasColumnName("horario");
            entity.Property(e => e.Lat)
                .HasPrecision(10, 7)
                .HasColumnName("lat");
            entity.Property(e => e.Lng)
                .HasPrecision(10, 7)
                .HasColumnName("lng");
            entity.Property(e => e.Nombre)
                .HasMaxLength(150)
                .HasColumnName("nombre");
            entity.Property(e => e.Telefono)
                .HasMaxLength(30)
                .HasColumnName("telefono");
        });

        modelBuilder.Entity<Distribuidora>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("distribuidora_pkey");

            entity.ToTable("distribuidora");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasColumnName("id");
            entity.Property(e => e.Direccion).HasColumnName("direccion");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.FechaRegistro)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("fecha_registro");
            entity.Property(e => e.Nombre)
                .HasMaxLength(150)
                .HasColumnName("nombre");
            entity.Property(e => e.Telefono)
                .HasMaxLength(30)
                .HasColumnName("telefono");
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("productos_pkey");

            entity.ToTable("productos");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasColumnName("id");
            entity.Property(e => e.Descripcion).HasColumnName("descripcion");
            entity.Property(e => e.FechaRegistro)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("fecha_registro");
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .HasColumnName("nombre");
            entity.Property(e => e.Origen)
                .HasMaxLength(100)
                .HasColumnName("origen");
            entity.Property(e => e.Precio)
                .HasPrecision(10, 2)
                .HasColumnName("precio");
            entity.Property(e => e.Stock)
                .HasDefaultValue(0)
                .HasColumnName("stock");
            entity.Property(e => e.TipoGrano)
                .HasMaxLength(100)
                .HasColumnName("tipo_grano");
            entity.Property(e => e.Tueste)
                .HasMaxLength(50)
                .HasColumnName("tueste");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
