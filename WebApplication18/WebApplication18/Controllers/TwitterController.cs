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
        public async Task<object> Get([FromUri]string Input,[FromUri]int question)
        {
            TwitterModel tm = new TwitterModel();

            switch (question)
            {
                case 1:
                    return await tm.getBasicUserInfo(Input);
                case 2:
                    return await tm.getBasicUserInfo(Input);
                case 3:
                    return await tm.test(Input);
                case 4:
                    return await tm.test(Input);
                case 5:
                    return await tm.test(Input);
                default:
                    return await tm.test(Input);
            }
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