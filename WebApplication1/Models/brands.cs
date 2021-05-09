using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class brands
    {
        int id;
        string brandname;
        string catname;

        public brands()
        {
        }

        public brands(int id, string brandname, string catname)
        {
            Id = id;
            Brandname = brandname;
            Catname = catname;
        }

        public int Id { get => id; set => id = value; }
        public string Brandname { get => brandname; set => brandname = value; }
        public string Catname { get => catname; set => catname = value; }
        public static List<brands> getbrands(string Catname)
        {
            DBservices db = new DBservices();
            return db.getbrands(Catname);
        }
    }
}