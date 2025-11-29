using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using TerraCafeApi.DTO;
using TerraCafeApi.Models;

namespace TerraCafeApi.Utils
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Distribuidora, DistribuidoraDTO>();
            CreateMap<DistribuidoraDTOCrear, Distribuidora>();

            CreateMap<Producto, ProductoDTO>();
            CreateMap<ProductoDTOCrear, Producto>();

            CreateMap<Cafeteria, CafeteriaDTO>();
            CreateMap<CafeteriaDTOCrear, Cafeteria>();


            CreateMap<Abastecimiento, AbastecimientoDTO>();
            CreateMap<AbastecimientoDTOCrear, Abastecimiento>();
        }
    }
}