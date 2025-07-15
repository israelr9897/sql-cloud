import supabase from "../../db.js";

export async function getAllProducts(req, res) {
  const { data, err } = await supabase.from("products").select();
  if(err){
    res.status(500).json({msg: err})
  }
  res.json(data)
}

getAllProducts();
