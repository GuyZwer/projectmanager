var s1 : string;
s1 = "abc";       // ok
s1 = null;        // compile error!  cannot assign null to string

var s2 : Nullable.<string>;
s2 = "abc";       // ok
s2 = null;        // ok

log s1
log s2
