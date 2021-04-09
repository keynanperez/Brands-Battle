using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication18.Models;
using System.Threading.Tasks;

namespace WebApplication18.Controllers
{
    public class TwitterController : ApiController
    {
        // GET api/<controller>
        public async Task<object> Get()
        {
            TwitterModel tm = new TwitterModel();
            // return await tm.getBasicUserInfo();
             return await tm.test();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}