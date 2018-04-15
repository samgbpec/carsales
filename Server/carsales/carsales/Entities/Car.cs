using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace carsales.Entities
{
    public class Car
    {
        public int Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Price { get; set; }
        public string Seller { get; set; }
        public string Comments { get; set; }
    }
}
