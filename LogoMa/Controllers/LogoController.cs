using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LogoMa.Models;


namespace LogoMa.Controllers
{
    public class LogoController : ApiController
    {
        // GET api/<controller>


        // GET api/<controller>/5
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        public Logo Get([FromUri]int numStage)
        {
            return Logo.getLogo(numStage);
        }
        // POST api/<controller>
        public int Post([FromBody]Logo[] logo)
        {
            return Logo.insert(logo);
        }


        // PUT api/<controller>/5
     
        // public void Put(int id, [FromBody]string value)
        // {
        //  }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}