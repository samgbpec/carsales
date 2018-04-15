using carsales.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace carsales.Repositories.Interfaces
{
    public interface ICarRepository
    {
        Car GetCar(int id);

        List<Car> GetCars();
    }
}
