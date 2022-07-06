def suggestPeople():
    user = request.session['_auth_user_id']
    username = User.objects.get(id=user)
    likes = Like.objects.filter(post=OuterRef('id'), user_id=user)
    posts = Post.objects.filter().order_by(
        '-post_date').annotate(current_like=Count(likes.values('id')))
    
    
    #List of who the current user follows:
    currentUser = Follower.objects.filter(follower_id=user)

    #Create an empty list with then copy the results
    userFollowing = []
    for i in currentUser:
        userFollowing.append(i.following_id)


    #Create a list for users
    userList=[]

    users = User.objects.all()
    for i in users:
        userList.append(i.id)


    #Create a new List without same elements
    followSuggestions = [x for x in userList if x not in userFollowing]
    suggestionList = []
    for i in followSuggestions:
        x = User.objects.get(id=i)
        suggestionList.append(x)
    
    for i in followSuggestions:
        is_following = Follower.objects.filter(follower=user, following=i).count()