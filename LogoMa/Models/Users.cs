using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LogoMa.Models
{
    public class Users
    {

        int id;
        string userName;
        string userPass;
        int points;
        string img;
        int userStage;





        public Users()
        {

        }

        public Users(int id, string userName, string userPass, int points, string img, int userStage)
        {
            Id = id;
            UserName = userName;
            UserPass = userPass;
            Points = points;
            Img = img;
            UserStage = userStage;
        }
        public Users(int id,  int points, int userStage)
        {
            Id = id;
            Points = points;
            UserStage = userStage;
        }

        public int Id { get => id; set => id = value; }
        public string UserName { get => userName; set => userName = value; }
        public string UserPass { get => userPass; set => userPass = value; }
        public int Points { get => points; set => points = value; }
        public string Img { get => img; set => img = value; }
        public int UserStage { get => userStage; set => userStage = value; }

        public int insert()
        {
            DBservices dbs = new DBservices();
            dbs.insert(this);
            return 0;
        }
        public static List<Users> getwinners()
        {
            DBservices db = new DBservices();
            return db.getwinners();
        }
        public string editUser()
        {
            DBservices db = new DBservices();
            return db.editUser(this);
        }
        public static Users login(string[] username)
        {
            DBservices dbs = new DBservices();
            return dbs.getuser(username);

        }
      
    }
}