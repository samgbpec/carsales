using carsales.Entities;
using carsales.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace carsales.Repositories
{
    public class CarRepository : ICarRepository
    {
        private string _path;
        private string _data
        {
            get
            {
                if (!File.Exists(_path))
                    throw new FileNotFoundException("Json data file does not exist");

                return File.ReadAllText(_path);
            }
        }

        public CarRepository(IConfiguration config)
        {
            //Read Json data file path from app settings
            _path = config.GetSection("DataSource").Value;
        }
        

        public Car GetCar(int id)
        {
            var cars= JsonConvert.DeserializeObject<List<Car>>(_data);
            return cars.Where(p=>p.Id==id).FirstOrDefault();
        }

        public List<Car> GetCars()
        {
            return JsonConvert.DeserializeObject<List<Car>>(_data);
        }

        
    }
}
