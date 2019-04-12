# Avoid mutable local Variables

def fib(n: Int): Int = {
  var a = 0
  var b = 1
  var i = 0
  while (i < n) {
    val prev_a = a
    a = b
    b = prev_a + b
    i = i + 1
  }
  a
}

def fib(n: Int): Int = {
  def fibIter(i: Int, a: Int, b: Int): Int =
    if (i == n) a else fibIter(i+1, b, a+b)
  fibIter(0, 0, 1)
}

# Line Length and Whitespace

if (p(this.head))
  this.tail.filter0(p, accu.incl(this.head))
else
  this.tail.filter0(p, accu)
  
val newAccu =
  if (p(this.head)) accu.incl(this.head)
  else accu
this.tail.filter0(p, newAccu)

# Common Subexpressions

this.remove(this.findMin).ascending(t + this.findMin)

val min = this.findMin
this.remove(min).ascending(t + min)

# Reuse

val googleTweets: TweetSet = TweetReader.allTweets.filter(tweet =>
  google.exists(word => tweet.text.contains(word)))
val appleTweets: TweetSet = TweetReader.allTweets.filter(tweet =>
  apple.exists(word => tweet.text.contains(word)))
  
def tweetsMentioning(dictionary: List[String]): TweetSet =
  TweetReader.allTweets.filter(tweet =>
    dictionary.exists(word => tweet.text.contains(word)))

val googleTweets = tweetsMentioning(google)
val appleTweets  = tweetsMentioning(apple)