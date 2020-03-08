import axios from "axios";

export function login(data,token) 
{
console.log(token,"tokrn")

  return axios.post("http://localhost:8000/api/login/",data)
   


}

export function createnote(note,token) {
  
  
  return axios.post("http://127.0.0.1:8000/api/note/",note,

  {headers:{"token":token}});
 
}

export function getAllNotes()
{

  return axios.get("http://localhost:8000/api/getnote/")

};

export function chanageprofile()
{

  return axios.post("http://localhost:8000/api/note/")

}

export function DisplayAllLabel(token) 
{

  return axios.get("http://localhost:8000/api/label/",{headers:{"token":token}})

};

export function addLabel(data,token) 
{

  return axios.post("http://localhost:8000/api/label/",data,{headers:{"token":token}})

};

export function editLabel() 
{

  return axios.put("http://localhost:8000/api/label/")

};

export function searchNote(data) 
{

  return axios.post("http://localhost:8000/api/search/",data)

};

export function deleteNote(id)
{

  return axios.delete("http://127.0.0.1:8000/api/note/"+id,)

}

export function deletelabel()
{

  return axios.delete("http://127.0.0.1:8000/api/note")

}
