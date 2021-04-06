using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Tweetinvi;
using Tweetinvi.Parameters;
using Tweetinvi.Models;
using Tweetinvi.Parameters.Enum;
using Tweetinvi.Parameters.V2;
using Tweetinvi.Streaming.V2;






namespace WebApplication18.Models
{
    public class TwitterModel
    {

        /*--------------------------Consumer Keys-----------------------------*/
        /*--------------------------------------------------------------------*/

        /*-------------------------API key & secret---------------------------*/
        string _API_key = "zcepOgSZmIhaQRy54L1KLMhXa";
        string _API_key_secret = "3IG4w5aNH4tgmgn9AEEztGo0D0XMdL4qC7fSj2aIvKwqBt6H7e";

        /*-------------------------Authentication Tokens----------------------*/
        /*--------------------------------------------------------------------*/


        /*-------------------------Bearer token-------------------------------*/
      //  string bearer_token = "AAAAAAAAAAAAAAAAAAAAANN5JgEAAAAA%2FbmU7by8ky8Jm4OsN7BsYWlRYLw%3DEJ21ZiWyErnkWPbG3W50oG6eis6mpFxwMe9YsN6GKsVqJFbKFW";


        /*--------------------Access token & secret--------------------------*/
        string access_token = "1324056647027884033-uVxW1p60vwskIt7LBf9tbDZIkF8EC8";
        string access_token_secret = "fPDWuQFGGQat4X3tdbSqgGR7y7EjqqNIfMkFxT4gKZzNt";
        /*
                //id , logoimg , followers 

                public async Task<object> test()
                 {
                     var tc = new TwitterClient(_API_key, _API_key_secret, access_token, access_token_secret);
                     var userParameters = new GetUserByNameV2Parameters("Nike")
                     {
                         Expansions = { UserResponseFields.Expansions.PinnedTweetId },
                         TweetFields = { UserResponseFields.Tweet.Attachments, UserResponseFields.Tweet.Entities },
                         UserFields = UserResponseFields.User.ALL,

                     };
                     var userResponse =await tc.UsersV2.GetUserByNameAsync(userParameters);
                     var user = userResponse;
                     return user;

                 }
             
                */
        /*
           //serch #
       public async Task<object> test()
       {
           var tc = new TwitterClient(_API_key, _API_key_secret, access_token, access_token_secret);
          var ourDate = DateTime.Today;
          var parameters = new SearchTweetsParameters("#Nike")

    {

               Filters = TweetSearchFilters.Hashtags,
               Until = DateTime.Today,//7 days
              Since = DateTime.Today.AddDays(-7),
             SearchType = SearchResultType.Mixed,
               IncludeEntities = true,
               Lang = LanguageFilter.English,
              TweetMode = TweetMode.None

           };
             var tweets = await tc.Search.SearchTweetsAsync(parameters);
              return tweets;
       }
       */

        //search @
        /*  public async Task<object> test()
          {
              var tc = new TwitterClient(_API_key, _API_key_secret, access_token, access_token_secret);
              var ourDate = DateTime.Today;
              var parameters = new SearchTweetsParameters("1374754579280138240")

              {

                  Filters = TweetSearchFilters.Replies,
                  Until = DateTime.Today,//7 days
                  Since = DateTime.Today.AddDays(-7),
                  SearchType = SearchResultType.Mixed,
                  IncludeEntities = true,
                  Lang = LanguageFilter.English,
                  TweetMode = TweetMode.None

              };
              var tweets = await tc.Search.SearchTweetsAsync(parameters);
              return tweets;
          }

          */

        public async Task<object> test()
        {

            var tc = new TwitterClient(_API_key, _API_key_secret, access_token, access_token_secret);
            var parameters = new GetUserTimelineParameters("nike")
            {
                //SinceId = DateTime.Today.AddDays(-7),
                IncludeEntities = true,
                IncludeRetweets = true,
                ExcludeReplies = true,
                //Until = DateTime.Today,//7 days
             
            };
            var tweets = await tc.Timelines.GetUserTimelineAsync(parameters);

            //var homeTimelineTweets = await tc.Timelines.GetHomeTimelineAsync(); 
            //,new PublishRetweetParameters
            //  Expansions = { UserResponseFields.Expansions.PinnedTweetId },
            //TweetFields = { UserResponseFields.Tweet.Attachments, UserResponseFields.Tweet.Entities },
            // UserFields = UserResponseFields.User.ALL
            //};

            //filters=TweetSearchFilters.Videos,
            //start_time = DateTime.Today.AddDays(-7),
            // Until = DateTime.Today,//7 days


            //tweet.created_at= DateTime.Today;
            return tweets;

        }
        }

    }  


