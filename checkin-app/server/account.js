Accounts.onCreateUser(function(profile, user){
	console.log(profile, user);
	if(user && user.services && user.services.facebook) {
		profile = profile.profile;
		profile.email = user.services.facebook.email;
		profile.first_name =  user.services.facebook.first_name;
		profile.last_name =  user.services.facebook.last_name;
		profile.link =  user.services.facebook.link;
		profile.gender =  user.services.facebook.gender;
		profile.locale =  user.services.facebook.locale;
		profile.age_range = user.services.facebook.age_range;	
	}
	profile.birthday = getBirthday(user.services.facebook.accessToken);
	user.profile = profile;
	return user;
});

var getBirthday = function (accessToken) {
  	try {
    return HTTP.get("https://graph.facebook.com/v2.4/me", {
     	params: {
        	access_token: accessToken,
        	fields: ['birthday']
      	}
    	}).data.birthday;
  	} catch (err) {
    	throw _.extend(new Error("Failed to fetch identity from Facebook. " + err.message),
                   {response: err.response});
  	}
};