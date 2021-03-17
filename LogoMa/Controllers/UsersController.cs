using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LogoMa.Models;

namespace LogoMa.Controllers
{
    public class UsersController : ApiController
    {
        // GET: api/User
        public List<Users> Get()
        {

            return Users.getwinners();
        }

        // GET: api/User/5
        public void Delete([FromBody]Users user)
        {
            user.editUser();
        }

        public string Get(int id)
            {
            return "value";
             }

        // POST: api/User
        public int Post([FromBody]Users user)
        {
           return user.insert();
        }

        // PUT: api/User/5
        //בדיקת תקינות סיסמא
        public Users Put(string[] username)
        {
            return Users.login(username);
        }
        

        // DELETE: api/User/5
        public void Delete(int id)
            {
            }

        
    }
}