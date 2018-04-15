using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using carsales.Dtos;
using carsales.Entities;
using carsales.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace carsales.Controllers
{
    [Produces("application/json")]
    [Route("api/Car")]
    public class CarController : Controller
    {
        private readonly ICarRepository _carRepository;
        

        public CarController(ICarRepository carRepository)
        {
            _carRepository = carRepository;
            
        }
        /// <summary>
        /// Get list of all cars
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get()
        {
            List<Car> cars = _carRepository.GetCars();

            if (cars == null)
            {
                return NotFound();
            }
            IEnumerable<CarDto> list = cars.Select(car=>Mapper.Map<CarDto>(car));
            return Ok(list);
        }

        /// <summary>
        /// Get details of a car
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Car car = _carRepository.GetCar(id);

            if (car == null)
            {
                return NotFound();
            }
            CarDto item = Mapper.Map<CarDto>(car);
            return Ok(item);
        }
    }
}