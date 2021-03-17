using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Data;
using System.Text;
using System.Globalization;
using LogoMa.Models;


namespace LogoMa.Models
{
  
        public class DBservices
        {
            public SqlDataAdapter da;
            public DataTable dt;

            public DBservices()
            {
                //
                // TODO: Add constructor logic here
                //
            }

        public int insert(Users user)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("DBConnectionString"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            String cStr = BuildInsertCommand(user);      // helper method to build the insert string

            cmd = CreateCommand(cStr, con);             // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {

                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }
        public Users getuser(string[] userName)
        {
            SqlConnection con = null;

            try
            {

                con = connect("DBConnectionString"); // create a connection to the database using the connection String defined in the web config file

                String cStr = "select * from Users_LM u where u.UserName='" + userName[0] + "' and u.UserPass='" + userName[1] + "'";      // helper method to build the insert string

                SqlCommand cmd = new SqlCommand(cStr, con);

                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection); // CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end
                Users user = new Users();
                while (dr.Read())
                {
                  
                    user.Id = (int)dr["id"];
                    user.UserName = (string)dr["UserName"];
                    user.UserPass = (string)dr["UserPass"];
                    user.Points = (int)dr["points"];
                    user.Img = (string)dr["img"];
                    user.UserStage = (int)dr["UserStage"];
                }


                return user;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
            finally
            {
                if (con != null)
                {
                    con.Close();
                }

            }


        }

        public int insert(Logo[] logo)
        {
            int numEffected = 0;
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("DBConnectionString"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
            for (int i = 0; i < logo.Length; i++)
            {
                String cStr = BuildInsertCommand(logo[i]);      // helper method to build the insert string

                cmd = CreateCommand(cStr, con);             // create the command
                try
                {

                    numEffected = cmd.ExecuteNonQuery(); // execute the command

                }
                catch (Exception ex)
                {
                    throw (ex); ;
                }
            }



            if (con != null)
            {
                // close the db connection
                con.Close();
            }

            return numEffected;

        }
        public Logo getLogo(int numStage)
        {
            SqlConnection con = null;

            try
            {

                con = connect("DBConnectionString"); // create a connection to the database using the connection String defined in the web config file

                String selectSTR = "select * from Logo_LM where stage =" + numStage;
                SqlCommand cmd = new SqlCommand(selectSTR, con);

                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection); // CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end
                Logo logo = new Logo();
                while (dr.Read())
                {

                  
                    logo.Stage = (int)dr["stage"];
                    logo.LogoName = (string)dr["LogoName"];
                    logo.LogoImg = (string)dr["LogoImg"];


                }

                return logo;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
            finally
            {
                if (con != null)
                {
                    con.Close();
                }

            }


        }
        public string editUser(Users user)
        {

            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("DBConnectionString"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);

            }

            String cStr = "UPDATE Users_LM set points = '" + user.Points + "',UserStage = '" + user.UserStage + "' where id = " + user.Id;      // helper method to build the insert string

            cmd = CreateCommand(cStr, con);             // create the command

            try
            {
                string numEffected = (string)cmd.ExecuteScalar(); // execute the command

                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }
        public List<Users> getwinners()
        {
            SqlConnection con = null;

            try
            {

                con = connect("DBConnectionString"); // create a connection to the database using the connection String defined in the web config file

                String selectSTR = "select top " + 5 + " * from Users_LM ORDER BY points DESC";
                SqlCommand cmd = new SqlCommand(selectSTR, con);
                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection); // CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end
                List<Users> list = new List<Users>();
                while (dr.Read())
                {   // Read till the end of the data into a row
                    Users u = new Users();
                    u.Id = (int)dr["id"];
                    u.UserName = (string)dr["UserName"];
                    u.UserPass = (string)dr["UserPass"];
                    u.Points = (int)dr["points"];
                    u.Img = (string)dr["img"];
                    u.UserStage = (int)dr["UserStage"];
                    list.Add(u);

                }

                return list;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
            finally
            {
                if (con != null)
                {
                    con.Close();
                }

            }


        }

        public SqlConnection connect(String conString)
        {

            // read the connection string from the configuration file
            string cStr = WebConfigurationManager.ConnectionStrings[conString].ConnectionString;
            SqlConnection con = new SqlConnection(cStr);
            con.Open();
            return con;
        }

        private String BuildInsertCommand(Users user )
        {
            String command;

            StringBuilder sb = new StringBuilder();
            //use a string builder to create the dynamic string
            sb.AppendFormat("Values( '{0}', '{1}','{2}','{3}','{4}')", user.UserName, user.UserPass, user.Points,user.Img,user.UserStage);
            String prefix = "INSERT INTO Users_LM " + "(UserName, UserPass,points,img,UserStage) ";
            command = prefix + sb.ToString();
            return command;
        }
        private String BuildInsertCommand(Logo logo)
        {
            String command;

            StringBuilder sb = new StringBuilder();
            //use a string builder to create the dynamic string
            sb.AppendFormat("Values( '{0}', '{1}')",logo.LogoName,logo.LogoImg);
            String prefix = "INSERT INTO Logo_LM " + "(LogoName, LogoImg) ";
            command = prefix + sb.ToString();
            return command;
        }



        private SqlCommand CreateCommand(String CommandSTR, SqlConnection con)
        {

            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = CommandSTR;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 40;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.Text; // the type of the command, can also be stored procedure

            return cmd;
        }

    }
    }
