package com.example.demo.controller;

import com.example.demo.model.Blogs;
import com.example.demo.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/blogs")
public class BlogController {
    @Autowired
    BlogService blogService;
    @GetMapping
    public Page<Blogs> showall(){
        return blogService.getAll(PageRequest.of(0,3));
    }
    @PostMapping
    public Blogs save(@RequestBody Blogs blogs){
        blogService.save(blogs);
        return blogs;
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){

        blogService.delete(id);
    }
    @GetMapping ("/{id}")
    public Blogs edit(@PathVariable int id){
        return blogService.findById(id).get();
    }
    @PutMapping("/edit")
    public void editblog(@RequestBody Blogs blogs){
        blogService.save(blogs);
    }
}
