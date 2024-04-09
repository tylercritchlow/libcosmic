(function() {var type_impls = {
"exr":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntegerBounds\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#794-907\">source</a><a href=\"#impl-IntegerBounds\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"exr/meta/attribute/struct.IntegerBounds.html\" title=\"struct exr::meta::attribute::IntegerBounds\">IntegerBounds</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.zero\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#797-799\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/meta/attribute/struct.IntegerBounds.html#tymethod.zero\" class=\"fn\">zero</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a box with no size located at (0,0).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_dimensions\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#802-804\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/meta/attribute/struct.IntegerBounds.html#tymethod.from_dimensions\" class=\"fn\">from_dimensions</a>(size: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"exr/math/struct.Vec2.html\" title=\"struct exr::math::Vec2\">Vec2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>&gt;&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a box with a size starting at zero.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#807-809\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/meta/attribute/struct.IntegerBounds.html#tymethod.new\" class=\"fn\">new</a>(start: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"exr/math/struct.Vec2.html\" title=\"struct exr::math::Vec2\">Vec2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.i32.html\">i32</a>&gt;&gt;, size: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"exr/math/struct.Vec2.html\" title=\"struct exr::math::Vec2\">Vec2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>&gt;&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a box with a size and an origin point.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.end\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#814-816\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/meta/attribute/struct.IntegerBounds.html#tymethod.end\" class=\"fn\">end</a>(self) -&gt; <a class=\"struct\" href=\"exr/math/struct.Vec2.html\" title=\"struct exr::math::Vec2\">Vec2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.i32.html\">i32</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the top-right coordinate of the rectangle.\nThe row and column described by this vector are not included in the rectangle,\njust like <code>Vec::len()</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#819-821\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/meta/attribute/struct.IntegerBounds.html#tymethod.max\" class=\"fn\">max</a>(self) -&gt; <a class=\"struct\" href=\"exr/math/struct.Vec2.html\" title=\"struct exr::math::Vec2\">Vec2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.i32.html\">i32</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the maximum coordinate that a value in this rectangle may have.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#824-839\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/meta/attribute/struct.IntegerBounds.html#tymethod.validate\" class=\"fn\">validate</a>(&amp;self, max_size: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"exr/math/struct.Vec2.html\" title=\"struct exr::math::Vec2\">Vec2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>&gt;&gt;) -&gt; <a class=\"type\" href=\"exr/error/type.UnitResult.html\" title=\"type exr::error::UnitResult\">UnitResult</a></h4></section></summary><div class=\"docblock\"><p>Validate this instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.byte_size\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#856-858\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/meta/attribute/struct.IntegerBounds.html#tymethod.byte_size\" class=\"fn\">byte_size</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Number of bytes this would consume in an exr file.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#861-870\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/meta/attribute/struct.IntegerBounds.html#tymethod.write\" class=\"fn\">write</a>&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt;(&amp;self, write: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;mut W</a>) -&gt; <a class=\"type\" href=\"exr/error/type.UnitResult.html\" title=\"type exr::error::UnitResult\">UnitResult</a></h4></section></summary><div class=\"docblock\"><p>Without validation, write this instance to the byte stream.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#873-893\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/meta/attribute/struct.IntegerBounds.html#tymethod.read\" class=\"fn\">read</a>&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt;(read: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;mut R</a>) -&gt; <a class=\"type\" href=\"exr/error/type.Result.html\" title=\"type exr::error::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Read the value without validating.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_origin\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#896-898\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/meta/attribute/struct.IntegerBounds.html#tymethod.with_origin\" class=\"fn\">with_origin</a>(self, origin: <a class=\"struct\" href=\"exr/math/struct.Vec2.html\" title=\"struct exr::math::Vec2\">Vec2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.i32.html\">i32</a>&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new rectangle which is offset by the specified origin.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#901-906\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/meta/attribute/struct.IntegerBounds.html#tymethod.contains\" class=\"fn\">contains</a>(self, subset: Self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns whether the specified rectangle is equal to or inside this rectangle.</p>\n</div></details></div></details>",0,"exr::meta::attribute::DataWindow","exr::meta::attribute::DisplayWindow"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-IntegerBounds\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#impl-Clone-for-IntegerBounds\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"exr/meta/attribute/struct.IntegerBounds.html\" title=\"struct exr::meta::attribute::IntegerBounds\">IntegerBounds</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"exr/meta/attribute/struct.IntegerBounds.html\" title=\"struct exr::meta::attribute::IntegerBounds\">IntegerBounds</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","exr::meta::attribute::DataWindow","exr::meta::attribute::DisplayWindow"],["<section id=\"impl-Copy-for-IntegerBounds\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#impl-Copy-for-IntegerBounds\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"exr/meta/attribute/struct.IntegerBounds.html\" title=\"struct exr::meta::attribute::IntegerBounds\">IntegerBounds</a></h3></section>","Copy","exr::meta::attribute::DataWindow","exr::meta::attribute::DisplayWindow"],["<section id=\"impl-StructuralPartialEq-for-IntegerBounds\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#impl-StructuralPartialEq-for-IntegerBounds\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"exr/meta/attribute/struct.IntegerBounds.html\" title=\"struct exr::meta::attribute::IntegerBounds\">IntegerBounds</a></h3></section>","StructuralPartialEq","exr::meta::attribute::DataWindow","exr::meta::attribute::DisplayWindow"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-IntegerBounds\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#impl-PartialEq-for-IntegerBounds\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"exr/meta/attribute/struct.IntegerBounds.html\" title=\"struct exr::meta::attribute::IntegerBounds\">IntegerBounds</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"exr/meta/attribute/struct.IntegerBounds.html\" title=\"struct exr::meta::attribute::IntegerBounds\">IntegerBounds</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","exr::meta::attribute::DataWindow","exr::meta::attribute::DisplayWindow"],["<section id=\"impl-Eq-for-IntegerBounds\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#impl-Eq-for-IntegerBounds\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"exr/meta/attribute/struct.IntegerBounds.html\" title=\"struct exr::meta::attribute::IntegerBounds\">IntegerBounds</a></h3></section>","Eq","exr::meta::attribute::DataWindow","exr::meta::attribute::DisplayWindow"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-IntegerBounds\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#impl-Hash-for-IntegerBounds\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"exr/meta/attribute/struct.IntegerBounds.html\" title=\"struct exr::meta::attribute::IntegerBounds\">IntegerBounds</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","exr::meta::attribute::DataWindow","exr::meta::attribute::DisplayWindow"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-IntegerBounds\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#impl-Default-for-IntegerBounds\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"exr/meta/attribute/struct.IntegerBounds.html\" title=\"struct exr::meta::attribute::IntegerBounds\">IntegerBounds</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"exr/meta/attribute/struct.IntegerBounds.html\" title=\"struct exr::meta::attribute::IntegerBounds\">IntegerBounds</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","exr::meta::attribute::DataWindow","exr::meta::attribute::DisplayWindow"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-IntegerBounds\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#impl-Debug-for-IntegerBounds\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"exr/meta/attribute/struct.IntegerBounds.html\" title=\"struct exr::meta::attribute::IntegerBounds\">IntegerBounds</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/meta/attribute.rs.html#199\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","exr::meta::attribute::DataWindow","exr::meta::attribute::DisplayWindow"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()