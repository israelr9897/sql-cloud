import supabase from "../../db.js";

export async function getAllUsers(req, res) {
  const { data, err } = await supabase.from("users").select();
  if (err) {
    res.status(500).json({ msg: err });
  }
  res.json(data);
}

export async function getUserByName(req, res) {
  const name = req.body.name;
  const password = req.body.password;
  const { data, err } = await supabase
    .from("users")
    .select("*")
    .eq("name", name)
    .eq("password", password)
  if (err) {
    res.status(500).json({ msg: err });
  }
  console.log(data);
  if(data){
        res.json({msg: "Login successful"})
  };
  res.json({msg: "Wrong username or password"});
}

export async function addUser(req, res) {}
